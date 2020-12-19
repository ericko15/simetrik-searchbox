import {IProps, ITimestamp} from "./types";

interface ISourceProps extends IProps {
  name: string
  company: string
  timestamp: ITimestamp
  description: string
  tags: string[]
}

export class Source implements ISourceProps {
  private readonly _id: string
  private readonly _index: number
  private readonly _isActive: boolean
  private readonly _name: string
  private readonly _company: string
  private readonly _timestamp: ITimestamp
  private readonly _description: string
  private readonly _tags: string[]

  private constructor(props: ISourceProps) {
    this._id = props.id
    this._index = props.index
    this._isActive = props.isActive
    this._name = props.name
    this._company = props.company
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

  get name(): string {
    return this._name
  }

  get company(): string {
    return this._company
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

  static create(props: ISourceProps): Source {
    return new Source(props)
  }

}
