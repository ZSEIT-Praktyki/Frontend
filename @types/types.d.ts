interface ListingImagesProps {
  photo_id: number;
  order: number;
  filename: string;
}

interface ListingSellerProps {
  id: number;
  email: string;
  creation_date: Date;
  owners_name: string;
  owners_surname: string;
  owners_phone: string;
}

interface CategoryProps {
  category_id: number;
  category_name: string;
  description: string;
}

interface SubcategoryProps {
  subcategory_id: number;
  description: string;
  name: string;
  category_id: CategoryProps;
}

interface ListingProps {
  images: ListingImagesProps[];
  listing_id: number;
  price: number;
  quantity: number;
  seller_id: ListingSellerProps;
  condition: number;
  added_date: Date;
  title: string;
  subcategory_id: SubcategoryProps;
  description?: string;
}

interface ListingMinified {
  listing_id: number;
  added_date: Date;
  images: null | {
    filename: string;
    order: number;
    photo_id: number;
  };
  title: string;
  price: number;
}
