import React,{useState} from 'react'

export default function SomOfPrime() {
    const [value,sumofprime] = useState(0);
    function doSom(e){
        e.preventDefault();
        let mun=e.target.num.value;
        let a = 3;
        let arr = [2]
        let prime= true;

        while(arr.length<mun){
            for(let i = 2;i<a;i++){
                if(i%a==0){
                    prime=false;
                    break
                }else{
                    prime=true
                }
            }
            if(prime==true){
                arr.push(a)
            }
            a++
        }
        let sum = arr.reduce(function(a,b){
            return a+b
        })
        sumofprime(sum);
    }
  return (
    <>
        <form onSubmit={doSom}>
            enter the number : <input type="number" name="num" id="num" /> <br />
            <button>DO SUM</button>
        </form>
        <h1>The sum prime number is {value}</h1>
    </>
  )
}
