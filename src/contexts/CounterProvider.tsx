import { createContext, type ReactNode, useState } from 'react';

interface ICounterContextType{
    counter : number,
    counterIncrement:() => void
}

interface ICounterProviderType{
    children : ReactNode
}

const CounterContext = createContext<ICounterContextType>({
    counter : 0,
    counterIncrement: () => {},
})

export const CounterProvider = ({ children }: ICounterProviderType) => {
    const [counter, setCounter] = useState<number>(0)
    
    const counterIncrement = () => {
            setCounter(counter+1) 
            localStorage.setItem('counter', JSON.stringify(counter +1))   
    }

    return (
        <CounterContext.Provider value={{counter, counterIncrement}}>
            {children} 
        </CounterContext.Provider> 
    )
}

export default CounterContext