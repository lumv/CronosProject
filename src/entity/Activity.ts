import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany,JoinColumn } from "typeorm";
import { User } from "./User";
import { Task } from "./Task";
import { Memo } from "./Memo";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(()=> User, user => user.activity)
    User!: User;
    @JoinColumn({ name: "UserId"})

    @OneToMany(()=> Task, task => task.activity)
    tasks!: Task[];

    @OneToOne(()=> Memo, memo => memo.Activity)
    memo!: Memo;
}