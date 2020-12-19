import {IProps, ITimestamp} from "./types";

interface IVisualType {
  name: string
}

interface IVisual {
  name: string
  type: string
}

interface IDashboardProps extends IProps {
  dashboardName: string
  visualType: IVisualType[]
  visuals: IVisual[]
  timestamp: ITimestamp
  description: string
  tags: string[]
}

export class Dashboard implements IDashboardProps {
  private readonly _id: string
  private readonly _index: number
  private readonly _isActive: boolean
  private readonly _dashboardName: string
  private readonly _visualType: IVisualType[]
  private readonly _visuals: IVisual[]
  private readonly _timestamp: ITimestamp
  private readonly _description: string
  private readonly _tags: string[]

  private constructor(props: IDashboardProps) {
    this._id = props.id
    this._index = props.index
    this._isActive = props.isActive
    this._dashboardName = props.dashboardName
    this._visualType = props.visualType
    this._visuals = props.visuals
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

  get dashboardName(): string {
    return this._dashboardName
  }

  get visualType(): IVisualType[] {
    return this._visualType
  }

  get visuals(): IVisual[] {
    return this._visuals
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

  static create(props: IDashboardProps): Dashboard {
    return new Dashboard(props)
  }
}
