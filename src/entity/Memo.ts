import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Activity } from "./Activity";

@Entity()
export class Memo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    text!: string;

    @OneToOne(()=> Activity, activity => activity.memo)
    @JoinColumn({ name: "ActivityId" })
    Activity!: Activity;

    @Column()
    activityId!: number;

}