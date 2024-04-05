import { useState, useEffect } from "react";
import axios from 'axios'


export default function Crypto() {

    const [data, setData] = useState<any>({ bpi: {} })

    useEffect(() => {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((res: any) => {
            console.log(res, "res")
            setData(res.data)
        }).catch(err => console.log(err))
    }, []);

    return (
        <div className="p-4 ">
            <div className='bg-white w-fit mx-auto shadow-xl flex flex-col p-6'>
                <p className='mb-5 font-semibold text-xl'>Bitcoin Price</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {Object.keys(data.bpi).length > 0 && Object.keys(data.bpi).map((key) => (
                        <div key={key} className="p-4 bg-gray-100 rounded-lg">
                            <p className="text-lg font-semibold">{data.bpi[key].description}</p>
                            <p className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: data.bpi[key].symbol + data.bpi[key].rate }}></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}