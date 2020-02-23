export interface IResult {
    code: number
    message: string
    data
}

export function resultRes<T>(code: number, message: string, data: T): IResult{
    let __RESULT: IResult = {
        code,
        message,
        data
    }
    return   __RESULT
}