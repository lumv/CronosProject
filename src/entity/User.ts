/** Esta es una entidad del modelo, en este caso el user, primarygenetaedcolumn es para generar la pk y column para las propiedades? */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, } from "typeorm";
import { Activity } from "./Activity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @OneToMany(()=> Activity, activity => activity.User)
    activity!: Activity[];
}