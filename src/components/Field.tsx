import "../style.css"


export const Field = (props:{rowNumber:number}) => {
    
    const handleClick = (event:any) => {
        let result = 0;
        document.getElementById("1")!.style.backgroundColor = "yellow";
        document.getElementById("1")!.style.color = "black";

        for (let i = 2; i <= Number(event.currentTarget.id); i++) {
            document.getElementById(String(i))!.style.backgroundColor = "yellow";
            document.getElementById(String(i))!.style.color = "black";
            document.getElementById(String(i))!.innerHTML = String(2**(i-1));
            result += 2**(i-1);
        }
        result += 1
        event.currentTarget.style.backgroundColor = "yellow";
        event.currentTarget.style.color = "black";
        event.currentTarget.innerHTML = String(2**(Number(event.currentTarget.id)-1));
        document.querySelector("#display")!.innerHTML = String(result)
        
    };
    let numbers = Array.from({length: 8}, (_, k) => k + 1 + 8 * (props.rowNumber - 1))
    return <>
    {props.rowNumber % 2 === 0 ?(
        <>
        {
            numbers.map( (i) => {
                return <div className={i%2===0?"black":"white"} id={String(i)} key={i} onClick={handleClick}>{i}</div>
            })
        }
        </>
    ):
    <>
        {
            numbers.map( (i) => {
                return <div className={i%2===0?"white":"black"} id={String(i)} key={i} onClick={handleClick}>{i}</div>
            })
        }
        </>}
    </>

}

