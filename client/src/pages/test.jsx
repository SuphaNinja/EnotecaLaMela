import { Input } from "../components/ui/input";

export default function Test () {
    const papp = 200;
    const metal = 300;

    const calculate = (meter) => {
        const summa = meter * metal;
        console.log(summa)
        return summa
    };

    return (
        <div>
            <div className="max-w-6xl">
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
            </div>
            <button onClick={() => calculate(200)}>test</button>
        </div>
    )
}