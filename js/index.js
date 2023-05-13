/**
 * Bài tập 1
 *  input: yêu cầu người dùng nhập số ngày làm 
 *          lương 1 ngày của nhân viên là 100000
 * 
 * process:Tính lương nhân viên : lương 1 ngày * số ngày làm 
 * 
 * 
 * output: Hiển thị kết quả là số lương nhân viên nhận được sau khi làm số ngày tương ứng
 */
document.getElementById('submit1').onclick = function(){
    var dayWorking = +document.getElementById('inputDayWorking').value ;
    var total = 0 ;
    total = dayWorking * 100000 ;

    document.getElementById('result1').innerHTML = total ;
}

/**
 * Bài tập 2
 *  input: yêu cầu người dùng nhập số thực (số thực 1 , số thực 2, số thực 3, số thực 4 , số thực 5)
 *          
 * 
 * process:Tính giá trị trung bình của tổng 5 số : (số 1 + số 2 + số 3 + số 4 + số 5) / 5 ;
 * 
 * 
 * output: Hiển thị kết quả là giá trị trung bình của 5 số
 */

document.getElementById('submit2').onclick = function(){
    var score1 = +document.getElementById('score1').value ;
    var score2 = +document.getElementById('score2').value ;
    var score3 = +document.getElementById('score3').value ;
    var score4 = +document.getElementById('score4').value ;
    var score5 = +document.getElementById('score5').value ;
    var total2 = 0 ;
    total2 = (score1 + score2 + score3 + score4 + score5) / 5 ;

    document.getElementById('result2').innerHTML = total2 ;
}
/**
 * Bài tập 3
 *  input: yêu cầu người dùng nhập số tiền USD muốn quy đổi sang VND(inputMoneyUSD)
 *          cho biết số tiền VND hiện tại là 23500/1 USD
 * 
 * process:Tính số tiền VND: inputMoneyUSD * 23500  ;
 * 
 * 
 * output: Hiển thị số tiền VND tương ứng với số USD người dùng nhập 
 *          ví dụ : 2 usd = 47000 VND
 */

document.getElementById('submit3').onclick = function(){
    var moneyUSD = +document.getElementById('moneyUSD').value ;
    var total3 = 0 ;
    total3 = moneyUSD * 23500 ;

    document.getElementById('result3').innerHTML = total3 ;
}
/**
 * Bài tập 4
 *  input: yêu cầu người dùng nhập số chiều dài và chiều rộng của hình chữ nhật (inputLenght, inputWidth)
 *          
 * 
 * process:Tính Diện tích hình chữ nhật:  inputLenght * inputWidth ;
 *         Tính Chu vi hình chữ nhật :(inputLenght + inputWidth) * 2;
 * 
 * output: Hiển thị kết quả chu vi và diện tích của hình chữ nhật 
 */

document.getElementById('submit4').onclick = function(){
    var inputLeght = +document.getElementById('inputLeght').value ;
    var inputWidth = +document.getElementById('inputWidth').value ;
    var totalDT4 = 0 ;
    var totalCV4 = 0 ;
    totalDT4 = inputLeght * inputWidth ;
    totalCV4 = (inputLeght + inputWidth) * 2 ;

    document.getElementById('resultDT4').innerHTML = totalDT4 ;
    document.getElementById('resultCV4').innerHTML = totalCV4 ;
}
/**
 * Bài tập 5
 *  input: Yêu cầu người dùng nhập vào số có 2 chữ số(inputNumberTwoChar)
 * 
 * process:Tìm ký số hàng đơn vị : numberUnit =  inputNumberTwoChar % 10;
 *         Tìm ký số hàng chục sử dụng Math.trunc: numberTensUnit = Math.trunc(inputNumberTwoChar / 10);
 *          Tính tổng 2 ký số : numberUnit + numberTensUnit
 * 
 * 
 * output: Hiển thị tổng 2 ký số 
 *         ví dụ: 23 => 5
 */

document.getElementById('submit5').onclick = function(){
    var inputNumberTwoChar = +document.getElementById('inputNumberTwoChar').value ;
    var total5 = 0 ;
    var numberUnit = inputNumberTwoChar % 10;
    var numberTensUnit = Math.trunc(inputNumberTwoChar / 10);

    total5 =  numberUnit + numberTensUnit;

    document.getElementById('result5').innerHTML = total5 ;
}