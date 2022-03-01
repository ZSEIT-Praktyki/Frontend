import Image from "next/image";
import Container from "@components/Container/index";

export default function NotFound() {
  return (
    <Container>
      <Image src="/404.svg" layout="fill" alt="Success" />
    </Container>
  );
}
