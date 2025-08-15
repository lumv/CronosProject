import { time } from "console";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Task } from "./Task";

@Entity()
export class Timer {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "datetime" })
    StartTime!: Date;

    @Column({ type: "datetime" })
    EndTime!: Date;

    @ManyToOne(()=> Task, task=> task.timer)
    @JoinColumn({name:"TaskId"})
    task!: Task;

}