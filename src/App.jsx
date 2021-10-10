import React, { useState } from "react";
import {
  Card,
  Icon,
  Radio,
  RadioGroup,
  TextField,
  DataField,
} from "./components";

function App() {
  const [{ tipAmount, total }, setForm] = useState({
    tipAmount: 0,
    total: 0,
  });
  const onChange = (target) => {
    const form = Object.fromEntries(new FormData(target).entries());
    const data = {
      bill: Number(form.bill),
      tips: form.tips === "custom" ? form.tips : Number(form.tips),
      person: Number(form.people),
      custom: Number(form.custom),
    };
    console.log(data);
    if (data.person === 0) {
      setForm({
        tipAmount: 0,
        total: 0,
      });
      return;
    }

    const tips = data.tips === "custom" ? data.custom : data.tips;
    const tip = data.bill * (tips / 100);
    const tipAmount = tip / data.person;
    const total = (data.bill + tip) / data.person;
    setForm({
      tipAmount,
      total,
    });
  };

  return (
    <div className="px-4 max-w-5xl md:mx-auto">
      <header className="flex justify-center my-12">
        <h1 className="w-24 text-cyan-darkest">
          <Icon.Logo />
        </h1>
      </header>
      <main className="">
        <Card className="bg-white rounded-3xl">
          <form
            className="flex flex-col md:flex-row  gap-8"
            onChangeCapture={(event) => onChange(event.currentTarget)}
            onResetCapture={(event) =>
              requestAnimationFrame(() => onChange(event.target))
            }
          >
            <div className="flex flex-col gap-8 flex-1">
              {/* Bill */}
              <TextField
                id="bill"
                label="Bill"
                icon={<Icon.Dollar />}
                value="0"
                min="0"
              />
              {/* select tip */}
              <RadioGroup id="tips" label="Select Tip %">
                <Radio label="5%" value="5" checked />
                <Radio label="10%" value="10" />
                <Radio label="15%" value="15" />
                <Radio label="25%" value="25" />
                <Radio label="50%" value="50" />
                <Radio label="custom" value="custom" custom />
              </RadioGroup>
              {/* number of people */}
              <TextField
                id="people"
                label="Number of People"
                icon={<Icon.Person />}
                value="0"
                min="0"
              />
            </div>
            {/* present */}
            <Card className="bg-cyan-darker rounded-xl flex flex-col justify-between gap-6 flex-1">
              <div className="space-y-6">
                <DataField
                  title="Tip Amount"
                  note="/ person"
                  value={`$${tipAmount}`}
                />
                <DataField title="Total" note="/ person" value={`$${total}`} />
              </div>
              <button
                className="bg-cyan-focus text-xl font-bold text-cyan-darker w-full rounded py-2 "
                type="reset"
              >
                RESET
              </button>
            </Card>
          </form>
        </Card>
      </main>
    </div>
  );
}

export default App;
