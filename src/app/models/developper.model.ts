import { Skill } from "./skill.model";

export class Developper {

    public lastName: string = 'toto';
    public firstName: string = 'tata';
    public age: number = 12;
    public gender: string = 'Monsieur';
    public bio: string = 'is a long establ using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search forver many web sites still in their infancy. Various vers';
    public skills: Skill[] = [
        new Skill('PHP', 'php', 'php.com'),
        new Skill('SYMFONY', 'symfony', 'symfony.com'),
    ];


}
