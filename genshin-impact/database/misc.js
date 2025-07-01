export class Misc {
    static sanetizeFilename(filename) {
        return filename
            // .replaceAll(' ', `%20`)
            // .replaceAll(`'`, `%27`)
            // .replaceAll(':', `%3A`)
            // .replaceAll('%', `%25`)
        ;
    }
}