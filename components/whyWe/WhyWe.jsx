import protectionIcon from "@/assets/icons/protection.svg";
import monitoringIcon from "@/assets/icons/monitoring.svg";
import listCheckedIcon from "@/assets/icons/list_checked.svg";
import timeIcon from "@/assets/icons/time.svg";
import greenEffect from "@/assets/images/green-effect.png";
import orangeEffect from "@/assets/images/orange-effect.png";
import purpleEffect from "@/assets/images/purple-effect.png";
import pinkEffect from "@/assets/images/pink-effect.png";
import Image from "next/image";
const WhyWe = () => {
  return (
    <div>
      <div>
        <h1 className={"text-center text-2xl md:text-3xl lg:text-4xl"}>
          Почему клиенты выбирают нас
        </h1>
        <p className={"text-center mt-3"}>
          Мы не привлекаем к выполнению работ третьих лиц, и людей без опыта
          работы
        </p>
        {/* grid container */}
        <div
          className={
            "grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10"
          }
        >
          {/* control card */}
          <div
            className={
              "h-fit lg:h-[388px] xl:h-fit bg-green rounded-[40px] py-9 px-7 relative overflow-hidden"
            }
          >
            <Image
              draggable={false}
              src={protectionIcon}
              alt={"protection-icon"}
              height={52}
            />
            <b className="inline-block mt-4">Контроль качества блюд</b>
            <div className={"mt-14"}>
              <p>
                Косметический ремонт квартир обычно включает в себя: окрашивание
                потолков, поклейка обоев на стены
              </p>
            </div>
            <Image
              draggable={false}
              className={"absolute left-0 bottom-0"}
              src={greenEffect}
              alt={"green-effect"}
            />
          </div>
          {/* fast and delicious card */}
          <div
            className={
              "h-fit lg:h-[388px] xl:h-fit bg-orange rounded-[40px] px-7 py-9 relative overflow-hidden"
            }
          >
            <Image
              draggable={false}
              src={monitoringIcon}
              alt={"protection-icon"}
              height={52}
            />
            <b className="inline-block mt-4">Быстро, вкусно, натурально</b>
            <div className={"mt-14"}>
              <p>
                Косметический ремонт квартир обычно включает в себя: окрашивание
                потолков, поклейка обоев на стены
              </p>
            </div>
            <Image
              draggable={false}
              className={"absolute right-0 top-0"}
              src={orangeEffect}
              alt={"green-effect"}
            />
          </div>
          {/* menu card */}
          <div
            className={
              "h-fit lg:h-[388px] xl:h-fit bg-lightPurple rounded-[40px] py-9 px-7 relative overflow-hidden"
            }
          >
            <Image
              draggable={false}
              src={listCheckedIcon}
              alt={"protection-icon"}
              height={52}
            />
            <b className="inline-block mt-4">Разнообразное меню</b>
            <div className={"mt-14"}>
              <p>
                Косметический ремонт квартир обычно включает в себя: окрашивание
                потолков, поклейка обоев на стены
              </p>
            </div>
            <Image
              draggable={false}
              className={"absolute left-0 bottom-0"}
              src={purpleEffect}
              alt={"green-effect"}
            />
          </div>
          {/* delivery card */}
          <div
            className={
              "h-fit lg:h-[388px] xl:h-fit bg-pink rounded-[40px] py-9 px-7 relative overflow-hidden"
            }
          >
            <Image
              draggable={false}
              src={timeIcon}
              alt={"protection-icon"}
              height={52}
            />
            <b className="inline-block mt-4">Разнообразное меню</b>
            <div className={"mt-14"}>
              <p>
                Косметический ремонт квартир обычно включает в себя: окрашивание
                потолков, поклейка обоев на стены
              </p>
            </div>
            <Image
              draggable={false}
              className={"absolute top-0 right-0"}
              src={pinkEffect}
              alt={"green-effect"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
