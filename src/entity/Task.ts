import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Activity } from "./Activity";
import { Timer } from "./Timer";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    //fk a Activity
    @ManyToOne(()=> Activity, activity => activity.tasks)
    @JoinColumn({ name: "ActivityId" })
    activity!: Activity;

    @OneToMany(()=> Timer, timer => timer.task)
    timer!: Timer[];
}