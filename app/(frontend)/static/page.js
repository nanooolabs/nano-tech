"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/modules/Button";
import { useForm } from "react-hook-form";
import { useFormspark } from "@formspark/use-formspark";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Pill from "@/components/modules/Pill";
import Heading from "@/components/modules/Heading";
import Form from "@/components/modules/Form";
import { SCHEMA__ContactForm } from "@/lib/schema";

const Wrapper = styled.div`
  .b__hero__variant05 {
    &__row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 2rem;
      @media (min-width: 992px) {
        --bs-gutter-x: 3rem;
        --bs-gutter-y: 0;
      }
      @media (min-width: 1200px) {
        --bs-gutter-x: 5rem;
      }
    }
    &__form-wrapper {
      padding: 2rem 1rem;
      @media (min-width: 768px) {
        padding: 4rem 2rem;
      }
      background-color: var(--t-cp-base-white);
      border-radius: 24px;
      border: 2px solid var(--t-border-color);
      box-shadow: var(--t-box-shadow-2xl);
      form {
        .c__button {
          width: 100%;
        }
      }
    }
  }
`;

const HeroVariant05 = ({ data }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    formState: { isValid },
  } = useForm({
    mode: "all",
  });

  const FORMSPARK_FORM_ID = "8EMED9u3U";

  const [formMessage, setFormMessage] = useState(null);
  const [payloadPosting, setPayloadPosting] = useState(false);
  const [submit] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const onSubmit = async (data) => {
    setPayloadPosting(true);
    setFormMessage(null);
    try {
      const payloadResponse = await submit(data);
      setPayloadPosting(false);
      reset();
      setFormMessage({
        type: `success`,
        message: `Thanks for submitting the form!`,
      });
    } catch (err) {
      console.log(err);
      setPayloadPosting(false);
      setFormMessage({
        type: `error`,
        message: `Oops, something went wrong. Please try again later`,
      });
    }
  };

  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__hero__variant05 overflow-hidden position-relative"
    >
      {!data?.enable_blobs && (
        <>
          <BlurryBlob top="-20rem" left="-20rem" />
          <BlurryBlob
            bottom="-20rem"
            right="0rem"
            color="var(--t-blob-color-2)"
          />
        </>
      )}
      <Wrapper className="container position-relative u__z-index-1">
        <div
          className={`row b__hero__variant05__row ${!data?.align_items_center ? "align-items-center" : ``}`}
        >
          <div className="col-lg-6">
            {/* {data.label && <Pill title={data.label} />}
            {data.heading && (
              <div className="c__heading-wrapper mb-4">
                <h1 className="c__heading u__d2">{parse(data.heading)}</h1>
              </div>
            )}
            {data.content && (
              <div className="c__description-wrapper">
                <p className="c__description u__h6">{parse(data.content)}</p>
              </div>
            )} */}
            <Heading tag={"h1"} className="u__d2">
              Powerful Section Heading
            </Heading>
            <div className="c__description-wrapper">
              <p className="c__description u__h6">
                Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
            <div className="c__button-wrapper mt-4 pt-3">
              <Button destination={`#`} title={`Get Started`} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="b__hero__variant05__form-wrapper">
              <Form
                isValid={isValid}
                formFields={SCHEMA__ContactForm}
                register={register}
                errors={errors}
                control={control}
                onSubmit={handleSubmit(onSubmit)}
                payloadPosting={payloadPosting}
                formMessage={formMessage}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default HeroVariant05;
