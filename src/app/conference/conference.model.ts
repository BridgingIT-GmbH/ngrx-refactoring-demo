
export interface ISchedule {
    date: string;
    slots: ISlot[];
}

export interface ISlot {
    timeFrom: string;
    timeUntil: string;
    icon?: string;
    break?: boolean;
    sessions: ISession[];
}

export interface ISession {
    title: string;
}
