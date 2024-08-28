function App() {

    const [counters, setCounters] = React.useState([])

    const updateCounter = (id, n) => {
        // console.log(id)
        let idx = counters.findIndex(el => el.id === id)
        // console.log("counter id =", idx)

        // add counter at this
        const newCounters = [...counters]
        if (newCounters[idx].number + n < 0) { return }

        newCounters[idx].number += n
        // console.log(newCounters)
        setCounters(newCounters)
        sumAllCounter(newCounters)
    }

    const [sum , setSum] = React.useState(0)

    const sumAllCounter = (newCounters) => {
        console.log('is this awoked?')
        console.log("Counters:", counters);

        let result = newCounters.reduce( (prev,acc) => {
            console.log(prev, acc)
           return prev + acc.number
        }, 0)

        setSum(result)
    }


    const addCounter = (i) => {
        const newArr = [...counters]
        // console.log(counters)

        newArr.push({ id: i, number: 0 })
        // console.log(newArr)

        setCounters(newArr)
        sumAllCounter(newArr)
        // setCounters( (prev) => {
        //  prev.push({id: 5, number: 20})
        // return prev
        // })
    }

    const rmCounter = (id) => {
        let idx = counters.findIndex( el => el.id === id)


        const newArr = [...counters]
        newArr.splice(idx,1)

        setCounters(newArr)
        sumAllCounter(newArr)


        // const rmNewArr = [...counters]
        // rmNewArr.splice(0, 1, idxx)
    
        // setCounters(rmNewArr)
    }
    
    return (
        <div className='app'>
            <h1 className="show-sum">{sum} </h1>
            <button onClick={() => addCounter(counters.length)} className="btn-add">Add Counter</button>
            <hr />
            {counters.map(el => (
                <Counter key={el.id} item={el} updateCounter={updateCounter} rmCounter={rmCounter} sumAllCounter={sumAllCounter} />
            ))
            }
        </div>
    )

}


function Counter(props) {
    // console.log(props)
    const { item, updateCounter, rmCounter} = props
    // console.log(item.id)
    return (
        <div className="counter">
            <button onClick={() => updateCounter(item.id, -1)} className="btn btn-dec">-</button>
            <h3 className="number">{item.number}</h3>
            <button onClick={() => updateCounter(item.id, +1)} className="btn btn-inc">+</button>
            <button onClick={() => updateCounter(item.id, -item.number)} className="btn btn-clr">C</button>
            <button onClick={() => rmCounter(item.id)} className="btn btn-rm">X</button>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)