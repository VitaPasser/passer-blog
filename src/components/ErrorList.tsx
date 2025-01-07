import React from 'react'

export type IErrorMessage = string

const ErrorList = ({ errors, className }: {
    errors: IErrorMessage[]
    className?: string
}) => {
    const className_ = className ?? ''
    if (errors.length === 0) return <></>
    return (
        <>
            <li className={'list-none pl-4 bg-red-50 dark:bg-red-950 py-4 ' + className_}>
                {errors.map((msg, key) => <ul key={key}>{msg}</ul>)}
            </li>
        </>
    )
}

export default ErrorList