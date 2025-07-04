import { Character } from "./Character.js";
import { Characters } from "./CharacterList.js";
import { InventoryMat } from "./InventoryMat.js";
import { Item } from "./Item.js";
import { Items } from "./ItemList.js";
import { Misc } from "./Misc.js";

export class Inventory {

    static characters_element = document.querySelector("#characters");
    static resumen_element = document.querySelector("#resumen");

    /**
     * @param   {InventoryMat[]} now_mats
     * @param   {InventoryMat[]} new_mats
     * @returns {InventoryMat[]}
     */
    static mergeMaterials(now_mats, new_mats) {
        /**
         * @type {Map<string, InventoryMat>}
         */
        const map = new Map();
    
        // Combinar materiales por item
        for (const mat of [...now_mats, ...new_mats]) {
            if(!("dest" in mat)) { mat.dest = []; }
            const key = mat.item;
            if (map.has(key)) {
                const existing = map.get(key);
                existing.amount += mat.amount;
                existing.current = 0;
                existing.dest = Array.from(new Set([...existing.dest, ...mat.dest]));
            } else {
                map.set(key, { item: mat.item, amount: mat.amount, current: 0, dest: [...mat.dest] });
            }
        }
    
        // Ordenar por ID del item
        const ordered = Array.from(map.values()).sort(
            (a, b) => Items.get(a.item).getData().id - Items.get(b.item).getData().id
        );
    
        return ordered;
    }
    /**
     * @param {Character} character 
     */
    static updateCharacter(character) {
        return class {
            /**
             * @param {*} data 
             */
            static setData(data) {
                character.getData().level.min = data.l[0];
                character.getData().level.max = data.l[1];
                for(let i = 0; i < data.e.length; i++) {
                    character.getData().getElement(i).constellation.min = data.e[i].c[0];
                    character.getData().getElement(i).constellation.max = data.e[i].c[1];
                    character.getData().getElement(i).getTalent('normal_attack').min = data.e[i].n[0];
                    character.getData().getElement(i).getTalent('normal_attack').max = data.e[i].n[1];
                    character.getData().getElement(i).getTalent('elemental_skill').min = data.e[i].s[0];
                    character.getData().getElement(i).getTalent('elemental_skill').max = data.e[i].s[1];
                    character.getData().getElement(i).getTalent('elemental_burst').min = data.e[i].b[0];
                    character.getData().getElement(i).getTalent('elemental_burst').max = data.e[i].b[1];
                }
                for (const itemData of character.getMaterials()){
                    const item = Items.get(itemData.item);
                    item.getPrivate().characters.set(character.getData().basename, itemData.amount);
                    item.getPrivate().calculateRequired();
                }
            }
        }
    }
    /**
     * @param {Item} item
     */
    static updateMaterial(item) {
        return class {
            // Current Amount
            static get_current()       { return    item.get_private().amount.current; }
            static set_current(amount) { item.get_private().amount.current  = amount; }
            static add_current(amount) { item.get_private().amount.current += amount; }
            static rem_current(amount) { item.get_private().amount.current -= amount; }
            
            // Required Amount
            static get_required()       { return    item.get_private().amount.required; }
            static set_required(amount) { item.get_private().amount.required  = amount; }
            static add_required(amount) { item.get_private().amount.required += amount; }
            static rem_required(amount) { item.get_private().amount.required -= amount; }
        }
    }

    // ===  === //
    
    static GenerateCharactersHTML() {
        const rarityNames = [ `COMMON` , `UN-COMMON` , `RARE` , `EPIC` , `LEGENDARY` ];
        let innerHTML = "";
        for (let characterId = 0; characterId < Object.values(Characters).length; characterId++) {
            const character = Characters.get(characterId);
            let valid = 1;
            if(character.getData().level.max > character.getData().level.min) valid = 0
            for(let i = 0; i < character.getData().getElements().length; i++){
                if(character.getData().getElement(i).getTalents().normal_attack.max   >= character.getData().getElement(i).getTalents().normal_attack.min) valid = 0;
                if(character.getData().getElement(i).getTalents().elemental_skill.max >= character.getData().getElement(i).getTalents().elemental_skill.min) valid = 0;
                if(character.getData().getElement(i).getTalents().elemental_burst.max >= character.getData().getElement(i).getTalents().elemental_burst.min) valid = 0;
            }
            if(character.getData().level.max == 1 && character.getData().level.min == 1) valid = -1;
            if(valid == 0){
                const mats = character.getMaterials();
                innerHTML += `
                    <p character-id="${character.getData().id}" character-name="${character.getData().basename}">
                        <span class="title ${rarityNames[character.getData().rarity-1]}">${character.getData().basename}</span>
                        <img class="icon ${rarityNames[character.getData().rarity-1]}" alt="${character.getData().basename}" src="./images/character/${Misc.sanetizeFilename(character.getData().basename)}.png">
                `;
                if(mats.length > 0){
                    innerHTML += `<span class="mats">`;
                }
                for(const mat of mats){ 
                    const item = Items.get(mat.item);
                    let remaining = mat.amount
                    if(remaining >= 100000000) {remaining = (parseInt(remaining/1000000+1)/1  ).toFixed(0)+"M"; }
                    if(remaining >= 10000000 ) {remaining = (parseInt(remaining/100000 +1)/10 ).toFixed(1)+"M"; }
                    if(remaining >= 1000000  ) {remaining = (parseInt(remaining/10000  +1)/100).toFixed(2)+"M"; }
                    if(remaining >= 100000   ) {remaining = (parseInt(remaining/1000   +1)/1  ).toFixed(0)+"k"; }
                    if(remaining >= 10000    ) {remaining = (parseInt(remaining/100    +1)/10 ).toFixed(1)+"k"; }
                    innerHTML += `
                        <span class="item">
                            <span class="amount">${remaining}</span>    
                            <img class="image ${rarityNames[item.getData().rarity-1]}" alt="${Misc.sanetizeFilename(item.getData().basename)}" src="./images/item/${Misc.sanetizeFilename(item.getData().basename)}.webp">
                        </span>
                    `;
                }
                if(mats.length > 0){
                    innerHTML += `</span>`;
                }
                innerHTML += `
                    </p>
                `;
            }
        };
        this.characters_element.querySelector(".body").innerHTML = innerHTML;
    }
    static GenerateResumenHTML() {
        this.resumen_element.querySelector(".body").innerHTML += '<details name="UNKNOWN" open><summary>UNKNOWN</summary><div class="content"></div</details>';
        this.resumen_element.querySelector(".body").innerHTML += '<details name="MISC" open><summary>MISC</summary><div class="content"></div</details>';
        this.resumen_element.querySelector(".body").innerHTML += '<details name="COMMON" open><summary>COMMON</summary><div class="content"></div</details>';
        this.resumen_element.querySelector(".body").innerHTML += '<details name="LOCAL_SPECIALTIES" open><summary>LOCAL_SPECIALTIES</summary><div class="content"></div</details>';
        this.resumen_element.querySelector(".body").innerHTML += '<details name="WEEKLY_BOSS" open><summary>WEEKLY_BOSS</summary><div class="content"></div</details>';
        this.resumen_element.querySelector(".body").innerHTML += '<details name="WORLD_BOSS" open><summary>WORLD_BOSS</summary><div class="content"></div</details>';
        this.resumen_element.querySelector(".body").innerHTML += '<details name="GEMSTONES" open><summary>GEMSTONES</summary><div class="content"></div</details>';
        this.resumen_element.querySelector(".body").innerHTML += '<details name="DOMAINS" open><summary>DOMAINS</summary><div class="content"></div</details>';
        
        const rarityNames = [ `COMMON` , `UN-COMMON` , `RARE` , `EPIC` , `LEGENDARY` ];
        let innerHTMLs = { 
            "MISC": "", 
            "COMMON": "", 
            "LOCAL_SPECIALTIES": "", 
            "UNKNOWN": "",
            "WEEKLY_BOSS": "",
            "WORLD_BOSS": "",
            "GEMSTONES": "",
            "DOMAINS": "",
        };
        for (let itemId = 0; itemId < Object.values(Items).length; itemId++) {
            const item = Items.get(itemId);
            item.getPrivate().calculate_remaining();
            let remaining = item.getPrivate().amount.remaining
            if(remaining >= 100000000) {remaining = (parseInt(remaining/1000000+1)/1  ).toFixed(0)+"M"; }
            if(remaining >= 10000000 ) {remaining = (parseInt(remaining/100000 +1)/10 ).toFixed(1)+"M"; }
            if(remaining >= 1000000  ) {remaining = (parseInt(remaining/10000  +1)/100).toFixed(2)+"M"; }
            if(remaining >= 100000   ) {remaining = (parseInt(remaining/1000   +1)/1  ).toFixed(0)+"k"; }
            if(remaining >= 10000    ) {remaining = (parseInt(remaining/100    +1)/10 ).toFixed(1)+"k"; }

            let title = `${item.getData().basename} (x${item.getPrivate().amount.remaining.toLocaleString('es-ES')})\n`;
            for(const a of item.getPrivate().characters.keys()){
                title += `- ${a}\n`;
            }
            title = (title+";").replace("\n;","")
            innerHTMLs[item.getData().resumenType] += `
                <p item-id="${item.getData().id}" item-name="${item.getData().basename}" class="item" ${item.getPrivate().amount.remaining <= 0 ? " style='display: none'": ""} title="${title}">
                    <span class="amount">${remaining}</span>
                    <img class="image ${rarityNames[item.getData().rarity-1]}" alt="${item.getData().basename}" src="./images/item/${Misc.sanetizeFilename(item.getData().basename)}.WEBP">
                </p>\n
            `;
        };
        for(const details of this.resumen_element.querySelectorAll("details")){
            const name = details.getAttribute("name");
            if(name in innerHTMLs){
                details.querySelector(".content").innerHTML = innerHTMLs[name];
                if(innerHTMLs[name] == "") {
                    details.remove();
                }
            } else {
                details.remove();
            }
        }
        // this.resumen_element.querySelector(".body").innerHTML += innerHTML;
    }
    /**
     * @param {number} item_id 
     */
    static UpdateResumenHTML(item_id) {
        const item = Items.get(item_id);
        let remaining = item.getPrivate().amount.remaining;
        this.resumen_element.querySelector(`p[item-id="${item_id}"] span`).textContent = remaining.toLocaleString('es-ES');
        this.resumen_element.querySelector(`p[item-id="${item_id}"]`).style.display = (remaining <= 0) ? "none": ""; 
    }
}