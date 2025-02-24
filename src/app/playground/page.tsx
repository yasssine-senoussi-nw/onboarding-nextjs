"use client";
import * as React from "react";

import { BaseButton } from "~components/baseButton";
import { Button } from "~components/elements/styled";
import { ArrowRightIcon } from "~components/icons/arrow";
import Banner3S from "~components/landing/banner3s";
import { LandingEmotionButton } from "~components/landing/LandingEmotionButton";
import { PrimaryButton } from "~components/primaryButton";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import { useAppDispatch, useAppSelector } from "~store";
import { decrement, increment, incrementByAmount, selectCount } from "~store/counter/slice";

const PlaygroundPage: React.FC = () => {
  const translate = useTranslation();

  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = React.useState<number>(0);

  const emptyFunction = () => {
    return null;
  };

  return (
    <>
      <div>
        {/* BaseButton with text and onClick */}
        <BaseButton
          text="signIn"
          onClick={() => {
            emptyFunction();
          }}
        />
        {/* BaseButton with text, onClick, and icon */}
        <BaseButton
          text="signUp"
          onClick={() => {
            emptyFunction();
          }}
          icon={<ArrowRightIcon />}
        />
        {/* BaseButton with icon and onClick */}
        <BaseButton
          text=""
          onClick={() => {
            emptyFunction();
          }}
          icon={<ArrowRightIcon />}
        />
      </div>
      <div>
        {/* PrimaryButton */}
        <PrimaryButton
          text="Sign in"
          onClick={() => {
            emptyFunction();
          }}
        />
      </div>
      <LandingEmotionButton />
      <Banner3S title="Playground" doc="https://react-redux.js.org/"></Banner3S>
      <Button>{translate(txKeys.common.styledButton)}</Button>
      <ArrowRightIcon />

      <h2>
        The current number is
        {count}
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(Number(e.target.value));
          }}
          type="number"
        />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Increment by amount</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  );
};

export default PlaygroundPage;
