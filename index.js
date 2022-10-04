/**
 * INPUT : điểm chuẩn (22), điểm 3 môn thi của thí sinh(), khu vực(A,B,C,X)và đối tượng dự thi(0,1,2,3)
 *
 *
 * PROCESS :
 *      1. Lấy input
 *      2. Tính tổng điểm
 *        2.1 tính điếm ưu tiên theo khu vực
 *        2.2 tính điểm ưu tiên theo đối tượng
 *        2.3 cộng hết lại => tổng điểm
 *      3. Xét kết quả :
 *        3.1 Không có điểm 0
 *              3.1.1 tổng điểm >= 22 Đậu
 *              3.1.2 tổng điểm < 22 Trượt
 *        3.2 Có điểm 0 Trượt
 *
 *
 *
 * OUTPUT : Tổng điểm đạt được, kết quả đậu hay rớt
 */
function calcPointArea(sub) {
  switch (sub) {
    case 'A':
      return 2;
    case 'B':
      return 1;
    case 'C':
      return 0.5;
    case 'X':
      return 0;
  }
}

function ex1() {
  var benchmark = 22,
    point_1 = 5,
    point_2 = 6,
    point_3 = 9,
    area = 1,
    pointArea,
    sub = 'A',
    pointSub,
    totalpoint = 0;
  // tính pointSub :
  pointSub = calcPointArea(sub);
  switch (area) {
    case 1:
      pointArea = 2.5;
      break;
    case 2:
      pointArea = 1.5;
      break;
    case 3:
      pointArea = 1;
      break;
    case 0:
      pointArea = 0;
      break;
  }
  if (
    point_1 != 0 &&
    point_2 != 0 &&
    point_3 != 0 &&
    point_1 <= 10 &&
    point_2 <= 10 &&
    point_3 <= 10 &&
    point_1 >= 0 &&
    point_2 >= 0 &&
    point_3 >= 0
  ) {
    totalpoint = point_1 + point_2 + point_3 + pointArea + pointSub;
    if (totalpoint >= benchmark)
      console.log(' Tổng điểm : ' + totalpoint + ' Đậu  ');
    else console.log(' Tổng điểm : ' + totalpoint + ' Rớt  ');
  } else if (point_1 == 0 || point_2 == 0 || point_3 == 0) {
    totalpoint = point_1 + point_2 + point_3 + pointArea + pointSubject;
    console.log(' Tổng điểm : ' + totalpoint + ' Rớt  ');
  } else console.log('nhập sai');
  console.log('Bài 1');
}
