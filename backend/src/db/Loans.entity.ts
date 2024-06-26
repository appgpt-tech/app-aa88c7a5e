//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Loans')
export class LoansEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('real', { nullable: true })
  CreditReceivedAmount: number;

  @Column('real', { nullable: true })
  InterestToBePaid: number;

  @Column('date', { nullable: true })
  LoanDueDate: Date;
}
