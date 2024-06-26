//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Accounts')
export class AccountsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  AccountNumber: string;

  @Column('integer', { nullable: true })
  ClientID: number;

  @Column('text', { nullable: true })
  Picture: string;
}
