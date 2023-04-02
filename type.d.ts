export interface Animals {
  id: string | null;
  age: string;
  careAddr: string;
  careNm: string;
  careTel: string;
  chargeNm: string;
  colorCd: string;
  desertionNo: string;
  filename: string;
  happenDt: string;
  happenPlace: string;
  kindCd: string;
  neuterYn: string;
  noticeEdt: string;
  noticeNo: string;
  noticeSdt: string;
  officetel: string;
  orgNm: string;
  popfile: string;
  processState: string;
  sexCd: string;
  specialMark: string;
  weight: string;
}

export interface TotalCount {
  totalCount: string | number | boolean;
}