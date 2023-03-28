export interface IBeneficiario {
  id?: number;
  estudiante: boolean;
  dependiente: boolean;
  tipoBeneficiario: string;
  persona: {
    id: number;
  };
}
