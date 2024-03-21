import { H2, H3, H4, Paragraph } from "@components/UI/Text";
import { useGetListingPreviewQuery } from "@utils/services/accountService";
import { useRouter } from "next/router";
import { API } from "@utils/assets/constants/routes";

export default function ProductPreview() {
  const router = useRouter();

  const { data } = useGetListingPreviewQuery<any>(+router.query.id!);

  return (
    <section className="mb-2">
      <H3>Product</H3>

      <article className="bg-zinc-950 w-full p-2 mt-2 rounded-md flex">
        <img
          className="w-32 h-24 rounded mr-2 object-cover"
          src={
            data?.images?.length > 0
              ? `${API}/listings/images/${data.images[0]?.filename}`
              : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
          }
        />

        <div className="flex flex-col">
          <H4>{data?.title}</H4>
          <Paragraph>
            &euro;
            {data?.price &&
              Number.parseFloat(`${data?.price / 100}`).toFixed(2)}
          </Paragraph>
          <Paragraph>quantity: 1</Paragraph>
        </div>
      </article>
    </section>
  );
}
