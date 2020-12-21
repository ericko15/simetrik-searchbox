import {IProps, ITimestamp} from "./types";
import {Model} from "./Model";

interface IConciliationProps extends IProps {
  conciliationName: string
  sourceA: string
  sourceB: string
  balance: string
  timestamp: ITimestamp
  description: string
  tags: string[]
}

export class Conciliation extends Model implements IConciliationProps {
  private readonly _id: string
  private readonly _index: number
  private readonly _isActive: boolean
  private readonly _conciliationName: string
  private readonly _sourceA: string
  private readonly _sourceB: string
  private readonly _balance: string
  private readonly _timestamp: ITimestamp
  private readonly _description: string
  private readonly _tags: string[]

  private constructor(props: IConciliationProps) {
    super()
    this._id = props.id
    this._index = props.index
    this._isActive = props.isActive
    this._conciliationName = props.conciliationName
    this._sourceA = props.sourceA
    this._sourceB = props.sourceB
    this._balance = props.balance
    this._timestamp = props.timestamp
    this._description = props.description
    this._tags = props.tags
  }

  get id(): string {
    return this._id
  }

  get index(): number {
    return this._index
  }

  get isActive(): boolean {
    return this._isActive
  }

  get conciliationName(): string {
    return this._conciliationName
  }

  get sourceA(): string {
    return this._sourceA
  }

  get sourceB(): string {
    return this._sourceB
  }

  get balance(): string {
    return this._balance
  }

  get timestamp(): ITimestamp {
    return this._timestamp
  }

  get description(): string {
    return this._description
  }

  get tags(): string[] {
    return this._tags
  }

  static create(props: IConciliationProps): Conciliation {
    return new Conciliation(props)
  }

}
