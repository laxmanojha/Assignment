import React from 'react'
import copy from '../asset/copy.svg'
import { useState } from 'react'

export const MainDiv = () => {
    const [data,setData] = useState({
        length:10,
    })
    const [password,setPassword] = useState("Generate");
    function changeHandler(e) {
        // generatePassword(e);
        setData(() => {
            return {
                ...data,
                [e.target.name]:e.target.value
            }
        })
        console.log(data);
    }
    function shuffle(arr) {
        if(arr.length == 1) {
            return arr;
        }
        for(let i=arr.length-1;i>0;i--) {
            let j = Math.floor(Math.random()*(i+1));
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
        return arr;
    }
    function generatePassword() {
        let upper = ['A','B','C','D','E','F','G'];
        let lower = ['a','b','c','d','e','f','g'];
        let number = [1,2,3,4,5,6,7,8,9,0];
        let symbol = ['!','@','#','$','%','^','&','*','('];
        upper = shuffle(upper);
        lower = shuffle(lower);
        number = shuffle(number);
        symbol = shuffle(symbol);
        let arr=[];
        let size = data.length;
        for(let i=1;i<=5;i++) {
            arr.push(upper[i]);
        }
        for(let i=1;i<=5;i++) {
            arr.push(lower[i]);
        }
        for(let i=1;i<=5;i++) {
            arr.push(number[i]);
        }
        for(let i=1;i<=5;i++) {
            arr.push(symbol[i]);
        }
        let tempArr=[];
        let ans="";
        for(let i=0;i<size;i++) {
            tempArr.push(arr[Math.floor(Math.random()*(arr.length))]);
        }
        shuffle(tempArr);
        ans = tempArr.join("");
        console.log(ans);
        setPassword(ans);
    }
  return (
    <div className=' w-1/4 bg-gray-700 text-white flex flex-col gap-y-3 py-5 px-3 max-[1000px]:text-xs'>

        <div className=' flex justify-between'>
            <span className=' font-semibold'>{password}</span>
            <img src={copy} width="40px"/>
        </div>

        <div className=' flex justify-between'>
        <span className=' font-semibold opacity-40'>Character Length</span>
        <span>{data.length}</span>
        </div>

        <div>
            <input id="length" min="0" max="20" className='w-full'
            type="range" 
            name="length" 
            onChange={changeHandler}
            />
        </div>

        <div className=' flex flex-col w-full mx-auto font-semibold opacity-40'>
            <div className=' flex gap-x-4'>
                <input type='checkbox' id='uppercase' name="upper"
                    onChange={changeHandler}
                />
                <label htmlFor='uppercase' className=' capitalize'>includes uppercase letters</label>
            </div>

            <div className=' flex gap-x-4'>
                <input type='checkbox' id='lowercase' name="lower"
                    onChange={changeHandler}
                />
                <label htmlFor='lowercase' className=' capitalize'>includes lowercase letters</label>
            </div>

            <div className=' flex gap-x-4'>
                <input type='checkbox' id='numbers' name="number"
                    onChange={changeHandler}
                />
                <label htmlFor='numbers' className=' capitalize'>includes numbers</label>
            </div>

            <div className=' flex gap-x-4'>
                <input type='checkbox' id='symbols' name="symbol"
                    onChange={changeHandler}
                />
                <label htmlFor='symbols' className=' capitalize'>includes symbols</label>
            </div>

        </div>

        <div className=' flex justify-between bg-gray-800 w-full mx-auto p-2 rounded-md font-semibold opacity-40'>
            <span>
                Strength
            </span>
            <div className=' text-center'>
                <div>
                    poor
                </div>
                <div className=' flex gap-x-1'>
                    <span className=' w-2 h-1 bg-red-700'></span>
                    <span className=' w-2 h-1 bg-red-700'></span>
                    <span className=' w-2 h-1 bg-white'></span>
                    <span className=' w-2 h-1 bg-white'></span>
                    <span className=' w-2 h-1 bg-white'></span>
                </div>
            </div>
        </div>

        <div className='w-full mx-auto font-semibold'>
            <button 
            onClick={generatePassword}
            className='w-full bg-cyan-500 p-2 rounded-md'>GENERATE</button>
        </div>
    </div>
  )
}
