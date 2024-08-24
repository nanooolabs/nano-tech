"use client";
import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";
import Heading from "@/components/modules/Heading";
import Link from "next/link";

const Wrapper = styled.article`
  .b__post__variant01 {
    &__image-wrapper {
      width: 100%;
      height: 300px;
      @media (min-width: 768px) {
        height: 450px;
      }
      @media (min-width: 992px) {
        height: 600px;
      }
      img {
        border-radius: var(--t-global-image-border-radius);
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
      }
    }
  }
`;

const BlogTemplate01 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__post__variant01 overflow-hidden position-relative"
    >
      <Wrapper>
        <div className="container">
          <div className="b__post__variant01__header">
            <div className="b__post__variant01__heading-wrapper u__mw-700 mx-auto mb-4 pb-2 text-center">
              <Link
                href="#"
                className="u__subtitle mb-2 u__f-500 u__text-branding-primary u__font-family-heading u__text-decoration-none"
              >
                Personal Finance
              </Link>
              <Heading>The Differences Between Rich and Wealthy People</Heading>
            </div>
            <div className="b__post__variant01__image-wrapper position-relative mb-4 pb-2">
              <Image
                className="b__post__variant01__image"
                fill
                // placeholder="blur"
                // blurDataURL={data.image.asset.metadata.lqip}
                src={`https://ik.imagekit.io/h7jkr1dmtk/tr:w-2000/priscilla-du-preez-XkKCui44iM0-unsplash.jpg`}
                alt={``}
                sizes="100%"
              />
            </div>
            <div className="b__post__variant01__body u__mw-800 mx-auto">
              <div className="b__post__variant01__date-wrapper mb-4">
                <span className="u__small" style={{ color: `#686868` }}>
                  <time datetime="2022-02-06">
                    Published on 6 February 2022
                  </time>
                </span>
              </div>
              <div className="b__post__variant01__article c__article-content">
                <p>
                  We may mistakenly believe that being wealthy and being rich
                  are the same thing, yet they are not. For whatever reason, the
                  terms wealthy and rich are frequently used interchangeably to
                  refer to the same thing.
                </p>
                <blockquote>
                  <p>
                    Although the two words may appear to be synonyms, they are
                    not. It's difficult to distinguish between the two, but
                    being rich and being wealthy are not the same thing. So,
                    let's look at the distinction between rich and wealthy
                    people.
                  </p>
                </blockquote>
                <p>
                  We may mistakenly believe that being wealthy and being rich
                  are the same thing, yet they are not. For whatever reason, the
                  terms wealthy and rich are frequently used interchangeably to
                  refer to the same thing.
                </p>
                <h2 id="what-does-it-imply-to-be-rich">
                  What does it imply to be rich?
                </h2>
                <p>
                  Having a lot of money or income is what it means to be rich.
                  It all boils down to your bank account balance. However, being
                  rich is not the same as being wealthy.
                </p>
                <p>
                  In fact, being rich frequently entails excessive spending. It
                  could also indicate that you owe a significant amount of
                  money. If your spending exceed your earnings, it doesn't
                  matter how much money you have. Being in debt isn't something
                  anyone wants to be!
                </p>
                <p>
                  Rich people may drive a flashy automobile or live in a
                  magnificent home in the greatest part of town, but it comes
                  with a price. You may appear rich if you earn $200,000 a year
                  — but if you spend $225,000 on expenses, you're on your road
                  to bankruptcy.
                </p>
                <p>
                  In truth, many celebrities have gone bankrupt as a result of
                  their lavish lifestyles.
                </p>
                <p>
                  MC Hammer had $30 million in the bank, a $1 million mansion
                  with 200 employees, and a horse stable with 19 racehorses at
                  one point. However, all of those expenses took their toll, and
                  Hammer declared bankruptcy in 1996 as a result of all of the
                  spending (along with a number of litigation). He ended up
                  owing $13 million.
                </p>
                <h2 id="what-does-it-mean-to-be-wealthy">
                  What does it mean to be wealthy?
                </h2>
                <p>
                  When it comes to being rich vs. wealthy, being wealthy means
                  not only having enough money to cover your basic necessities,
                  but also being able to avoid working if you don't have to.
                  It's all about accumulating assets and putting your money to
                  good use. To put it another way, it's possessing a sizable net
                  worth.
                </p>
                <p>
                  Wealthy people don't always have the most up-to-date gadgets
                  or cars, and they don't always throw lavish parties. They do,
                  however, have a large number of assets, including real estate,
                  investments, and cash.
                </p>
                <p>
                  If your monthly expenses are $5,000 and you have $30,000 in
                  savings, you have approximately six months' worth of wealth.
                  You will be wealthy if you invest that $30,000 and earn $5,000
                  per month in investment income.
                </p>
                <p>
                  Business owners are frequently among America's wealthiest
                  citizens. Amazon founder Jeff Bezos has a net worth of $145
                  billion, while Warren Buffet has a net worth of $80.8 billion.
                  Buffet is regarded as a thrifty billionaire.
                </p>
                <p>
                  Despite his enormous wealth, he continues to live in the
                  Nebraska home he purchased for $31,500 in 1958. In 1971, he
                  paid $150,000 for a vacation beach house in California, which
                  he later sold for $7.5 million.
                </p>
                <h2 id="what-is-the-difference-between-wealthy-and-rich-people">
                  What is the difference between wealthy and rich people?
                </h2>
                <p>
                  So, what's the difference between wealthy and rich people?
                  Well, there's a little more to being wealthy vs. rich than the
                  amount of money in your bank account. In fact, someone who
                  earns less than a rich person can be wealthier than the rich
                  person with the flashy car and the most up-to-date fashion
                  designs.
                </p>
                <p>
                  That's because rich people spend a lot of money, but wealthy
                  people save and invest the majority of it. People who are
                  wealthy may have a lot of money, but they do not spend it all
                  at once. They also don't use debt unless it's for a very
                  specific purpose, such as a home purchase.
                </p>
                <p>
                  A wealthy person saves as much as possible and invests it in
                  assets. This could entail purchasing real estate or making
                  stock market investments. Wealthy people understand that in
                  order to grow their wealth, they must convert their cash into
                  assets, regardless of how they invest.
                </p>
                <h2 id="how-to-become-wealthy">How to become wealthy</h2>
                <p>
                  You now understand the distinction between rich and wealthy
                  people. There are a few things you can do to get started if
                  you want to become wealthy. Don't just think about how much
                  money you make. You should also avoid schemes that sell you
                  quick-money schemes. Instead, follow these steps to get out of
                  debt and develop the right mindset for accumulating wealth.
                </p>
                <h3 id="every-month-set-aside-10-15-of-your-pay">
                  Every month, set aside 10-15% of your pay.
                </h3>
                <p>
                  The first step to becoming wealthy is to set aside a portion
                  of your monthly income, regardless of how much you earn. Every
                  month, set aside at least 10% to 15% of your income.
                </p>
                <p>
                  You can have a portion of your paycheck deposited directly
                  into your savings account by setting up your bank account.
                  This is a simple way to save money without having to think
                  about it. If you have trouble saving, try a savings challenge
                  or examine your budget to see where you can cut costs.
                </p>
                <h3 id="pay-off-your-debts-starting-with-the-ones-with-the-highest-interest-rates">
                  Pay off your debts, starting with the ones with the highest
                  interest rates.
                </h3>
                <p>
                  Being debt-free is another distinction between being wealthy
                  and being wealthy. You must be debt-free if you want to be
                  wealthy. Pay off your debts first, starting with high-interest
                  loans like credit cards.
                </p>
                <p>
                  Find out if refinancing your student loans or mortgage for a
                  lower interest rate makes sense. You can also look into debt
                  forgiveness for students. Make getting out of debt your top
                  priority!
                </p>
                <h3 id="invest-as-soon-as-possible-and-as-much-as-possible">
                  Invest as soon as possible and as much as possible.
                </h3>
                <p>
                  Investing is one of the quickest ways to increase your wealth.
                  Investing, of course, has its own set of risks, but there are
                  plenty of options. You can use an automated service such as a
                  Robo-advisor, seek investment advice from a broker, or invest
                  in assets other than stocks, such as real estate.
                </p>
                <ul>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
                <p>
                  Whatever you do, make an effort! You can even save your money
                  in a high-interest savings account until you're ready to
                  invest it. Make your money do the heavy lifting for you.
                  Remember investing is one of the main differences between
                  being rich vs wealthy.
                </p>
                <h3 id="dont-waste-money-on-things-you-dont-need">
                  Don't waste money on things you don't need.
                </h3>
                <p>
                  Being frugal and living within your means is the key to
                  increasing your wealth. In fact, you should live well below
                  your means in order to put your extra money and savings to
                  good use.
                </p>
                <p>
                  That means resisting the temptation to buy those designer
                  jeans or the newest iPhone model when an older model will
                  suffice. Spend your money wisely and only buy items that you
                  not only require but will also hold their value over time.
                </p>
                <h3 id="consider-your-long-term-financial-objectives-and-assets">
                  Consider your long-term financial objectives and assets.
                </h3>
                <p>
                  What is the distinction between being wealthy and being rich?
                  Long-term objectives and assets Building wealth is a long-term
                  endeavor. It isn't something that happens in a flash. It's
                  fine if it takes you years to accumulate your wealth. Remember
                  your long-term goals and why you decided to try to become
                  wealthy in the first place when things get tough.
                </p>
                <h2 id="wealth-is-a-state-of-mind">
                  Wealth is a state of mind.
                </h2>
                <p>
                  Being wealthy does not begin with a large wallet full of cash
                  when it comes to rich vs wealthy. The foundation of wealth is
                  a positive mindset. Save a portion of your income, work toward
                  debt elimination, and start investing early and often.
                </p>
                <p>
                  If you want to be wealthy, you must always consider your
                  long-term objectives. Do you want to retire sooner rather than
                  later? Do you own a few properties? Travel? Don't just think
                  about your income when thinking about wealth; think about
                  building up your investments and assets to last you a few
                  lifetimes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default BlogTemplate01;
