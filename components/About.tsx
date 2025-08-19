'use client';
import AboutPawSVG from '@/public/about-paw.svg';
import AccentSVG from '@/public/accent-4.svg';
import { Badge } from './ui/badge';
import { useFadeIn } from '@/lib/hooks/useFadeIn';

export default function About() {
  const { elementRef: contentRef, isVisible: contentVisible } = useFadeIn();
  const { elementRef: imageRef, isVisible: imageVisible } = useFadeIn({ threshold: 0.3 });

  return (
    <section
      id="about"
      className="flex bg-[#CCBBF2]/10 md:px-10 py-20 md:py-20 xl:py-30"
    >
      <div className="container flex flex-col gap-4 sm:gap-6 md:gap-8 lg:flex-row lg:gap-[80px]">
        <div 
          ref={contentRef}
          className={`fade-in-left ${contentVisible ? 'visible' : ''} w-full lg:flex-1 lg:max-w-[631px] space-y-4`}
        >
          <div className="relative inline-block">
            <AboutPawSVG className="absolute -left-28 -top-20 -z-[1] hidden h-48 w-48 2xl:inline" />
            <AccentSVG className="absolute -right-20 -top-12 -z-[1] h-24 w-24" />
            <h2>
              About us
            </h2>
          </div>

          <div className="flex h-6 items-center gap-2">
            <h4 className="text-grape">Amanda</h4>
            <h4 className="text-[#CCBBF2]">Founder</h4>
          </div>

          <div className="mt-6 flex flex-col items-start justify-start gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-start" style={{ marginTop: '24px' }}>
            <Badge variant={'secondary'} className="px-4" style={{ paddingTop: '8px', paddingBottom: '8px' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.47083 20H3.33333C2.44928 20 1.60143 19.6488 0.976311 19.0237C0.35119 18.3986 0 17.5507 0 16.6667V12.5C0 11.6159 0.35119 10.7681 0.976311 10.143C1.60143 9.51786 2.44928 9.16667 3.33333 9.16667H10.7142C11.1652 9.16688 11.6085 9.28351 12.0012 9.50527C12.3939 9.72703 12.7227 10.0464 12.9558 10.4325L15.6367 7.48667C15.8584 7.24282 16.126 7.04507 16.4242 6.90472C16.7225 6.76436 17.0454 6.68415 17.3746 6.66867C17.7039 6.65319 18.0329 6.70275 18.343 6.81451C18.653 6.92627 18.938 7.09804 19.1817 7.32C19.6678 7.76661 19.9591 8.38624 19.993 9.04552C20.0268 9.70479 19.8004 10.351 19.3625 10.845L13.6958 17.2092C12.9134 18.0867 11.9544 18.7889 10.8816 19.2699C9.80882 19.7509 8.6465 19.9997 7.47083 20ZM3.33333 10.8333C2.89131 10.8333 2.46738 11.0089 2.15482 11.3215C1.84226 11.634 1.66667 12.058 1.66667 12.5V16.6667C1.66667 17.1087 1.84226 17.5326 2.15482 17.8452C2.46738 18.1577 2.89131 18.3333 3.33333 18.3333H7.47083C8.41077 18.333 9.34001 18.1339 10.1977 17.7494C11.0553 17.3648 11.822 16.8033 12.4475 16.1017L18.1183 9.73667C18.2656 9.57083 18.3418 9.35379 18.3306 9.13231C18.3193 8.91083 18.2216 8.70261 18.0583 8.5525C17.8923 8.40327 17.6747 8.32465 17.4517 8.33333C17.3411 8.33801 17.2326 8.36466 17.1324 8.41174C17.0323 8.45881 16.9425 8.52536 16.8683 8.6075L13.18 12.6667C13.0181 13.1148 12.7375 13.5106 12.3682 13.8117C11.999 14.1129 11.5549 14.3082 11.0833 14.3767L6.7825 14.9917C6.5637 15.0231 6.34139 14.9662 6.16448 14.8337C5.98757 14.7012 5.87055 14.5038 5.83917 14.285C5.80778 14.0662 5.8646 13.8439 5.99713 13.667C6.12965 13.4901 6.32703 13.3731 6.54583 13.3417L10.8475 12.7275C11.0863 12.6941 11.3035 12.5714 11.4552 12.384C11.607 12.1966 11.682 11.9587 11.6651 11.7182C11.6481 11.4777 11.5405 11.2526 11.364 11.0883C11.1875 10.9241 10.9553 10.8329 10.7142 10.8333H3.33333ZM9.16667 7.56167C8.78897 7.56268 8.42228 7.43447 8.1275 7.19833C6.70083 6.05333 5 4.33333 5 2.66667C4.97954 1.98197 5.23107 1.31704 5.69957 0.817303C6.16807 0.317569 6.81541 0.0237102 7.5 0C8.12278 0.00242569 8.72031 0.246515 9.16667 0.680833C9.61302 0.246515 10.2105 0.00242569 10.8333 0C11.5179 0.0237102 12.1653 0.317569 12.6338 0.817303C13.1023 1.31704 13.3538 1.98197 13.3333 2.66667C13.3333 4.33333 11.6325 6.05333 10.205 7.19917C9.91033 7.43483 9.54398 7.56273 9.16667 7.56167ZM7.5 1.66667C7.25779 1.69097 7.03479 1.80935 6.87896 1.99635C6.72312 2.18336 6.64689 2.42405 6.66667 2.66667C6.66667 3.41667 7.62583 4.65833 9.17167 5.89917C10.7075 4.65833 11.6667 3.41667 11.6667 2.66667C11.6864 2.42405 11.6102 2.18336 11.4544 1.99635C11.2985 1.80935 11.0755 1.69097 10.8333 1.66667C10.5911 1.69097 10.3681 1.80935 10.2123 1.99635C10.0565 2.18336 9.98023 2.42405 10 2.66667C10 2.88768 9.9122 3.09964 9.75592 3.25592C9.59964 3.4122 9.38768 3.5 9.16667 3.5C8.94565 3.5 8.73369 3.4122 8.57741 3.25592C8.42113 3.09964 8.33333 2.88768 8.33333 2.66667C8.35311 2.42405 8.27688 2.18336 8.12104 1.99635C7.96521 1.80935 7.74221 1.69097 7.5 1.66667Z"
                  fill="currentColor"
                />
              </svg>
              Professional pet care provider
            </Badge>
            <Badge variant={'secondary'} className="px-4" style={{ paddingTop: '8px', paddingBottom: '8px' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3807 4.35815L12.2357 1.43065C10.883 0.622683 9.19944 0.608347 7.83319 1.39315L1.61905 4.35815C1.59573 4.36983 1.57155 4.38233 1.54905 4.39565C0.0743581 5.23885 -0.437595 7.11788 0.405608 8.59257C0.691428 9.09249 1.11186 9.5021 1.61905 9.77483L3.33322 10.5915V14.6748C3.33424 16.5007 4.52233 18.1139 6.26573 18.6565C7.47897 19.0075 8.73697 19.1793 9.9999 19.1665C11.2626 19.1807 12.5206 19.0103 13.7341 18.6607C15.4775 18.1181 16.6656 16.5049 16.6666 14.679V10.5898L18.3333 9.79315V16.6665C18.3333 17.1267 18.7063 17.4998 19.1666 17.4998C19.6268 17.4998 19.9999 17.1267 19.9999 16.6665V6.66647C20.0054 5.68792 19.2328 4.78393 18.3807 4.35815ZM14.9999 14.679C15.0003 15.7712 14.2917 16.7372 13.2499 17.0648C12.1934 17.3667 11.0986 17.5132 9.99986 17.4998C8.90115 17.5132 7.80635 17.3667 6.74987 17.0648C5.70803 16.7372 4.99944 15.7712 4.99987 14.679V11.3857L7.76404 12.7024C8.44608 13.1074 9.22502 13.3202 10.0182 13.3182C10.7732 13.3235 11.5155 13.1237 12.1657 12.7399L14.9999 11.3857V14.679ZM17.6665 8.27065L11.3815 11.2707C10.5052 11.7809 9.41901 11.7665 8.55654 11.2332L2.40737 8.30815C1.72194 7.93854 1.46592 7.08327 1.83553 6.39788C1.96053 6.16608 2.14795 5.97393 2.37655 5.84315L8.62236 2.85983C9.49897 2.35069 10.5846 2.3651 11.4474 2.89733L17.5924 5.82483C18.0443 6.07577 18.327 6.54964 18.3332 7.06651C18.334 7.55612 18.0819 8.01143 17.6665 8.27065Z"
                  fill="currentColor"
                />
              </svg>
              Dog trainer
            </Badge>
          </div>

          <div className="text-base/20 py-4" style={{ marginTop: '8px' }}>
            <p>
              Hi, my name is Amanda and I would love to be your pet care
              provider! My professional experience in pet care started in 2019 as a Pack
              Leader at a local doggie daycare. In 2021, I resigned from my then
              position as an Assistant Manager to pursue education in Positive
              Reinforcement Dog Training.
            </p>
            <br />
            <p>
              Finally in early 2022, I was able to work full time as a
              Professional Pet Care Provider and Dog Trainer for my company
              Pawsitive Pet Care. I have been certified for Cat and Dog CPR and
              First Aid for over two years.
            </p>
          </div>
        </div>

        <div 
          ref={imageRef}
          className={`fade-in-right ${imageVisible ? 'visible' : ''} w-full lg:flex-1 flex justify-center lg:justify-start items-center`}
          style={{ transitionDelay: '0.3s' }}
        >
          <img
            src="/about_accents.webp"
            alt="Amanda - Professional pet care provider and dog trainer"
            className="max-w-[480px] w-full h-auto rounded-lg"
          />
        </div>
        </div>
      </section>
  );
}
