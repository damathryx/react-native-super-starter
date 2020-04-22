export type AsyncState<Payload> = {
  data: Payload;
  pending: boolean;
  error?: boolean;
  Message?: string;
};
