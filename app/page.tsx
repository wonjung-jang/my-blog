import { TypographyH1 } from "@/components/ui/TypographyH1";
import { TypographyP } from "@/components/ui/TypographyP";

export default function Home() {
  return (
    <div className="flex flex-col items-left gap-6 text-left pt-32 px-16">
      <TypographyH1>안녕하세요. 장원정입니다.</TypographyH1>
      <TypographyP>
        일할 땐 책임감이 강하며, 똑 부러지는 어휘와 말투를 사용하며, 일상에서는 허점이 많지만,
        유머를 잃지 않는 사람이 되고 싶습니다.
      </TypographyP>
      <TypographyP>
        현실과 거리가 먼 이상에 가끔은 괴롭지만, 간극을 좁혀 나가려 노력합니다.
      </TypographyP>
      <TypographyP>
        공부한 내용과 일상의 생각들을 기록하고자 개인 블로그를 만들었습니다.
      </TypographyP>
      <TypographyP>
        누추한 블로그에 방문해 주신 분들의 일상에 행복이 깃들길 바라며, 방문하지 않은 분들께도
        바라지만 방문을 안 하시니 전달할 도리가 없네요.
      </TypographyP>
      <TypographyP>아무튼 환영합니다.</TypographyP>
    </div>
  );
}
