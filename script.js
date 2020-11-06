let disOld = 2;

$("button").click(function(){
  let name = $(".name").val();
  let birthDate = $(".year").val();
  disOld = 2020 - (Number(birthDate));
  if (disOld < 1000){
    $(".message").text("Hey, you. Yeah, you, "+ name +". yeah you're "+ disOld +". As in you're a babyyyyy compared to meeeee :))))")
  }
  else if (disOld > 1000 ){    
  $(".message").text("Hey, you. Yeah, you, "+ name +". yeah you're "+ disOld +". Oh, you're an oldie, even older than me. Uh I guess, thank you for using our services most esteemed customer?")}
 
});
