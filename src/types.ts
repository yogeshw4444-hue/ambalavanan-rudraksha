export interface FaqItem {
  id: string;
  question: string;
  tamilQuestion: string;
  answer: string;
  tamilAnswer: string;
  category: 'authenticity' | 'wearing' | 'care' | 'orders';
}

export interface EnquiryFormState {
  fullName: string;
  phone: string;
  city: string;
  preferredProduct: string;
  message: string;
}
