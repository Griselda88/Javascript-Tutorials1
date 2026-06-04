

// function bossBattle(baseDamage, criticalHit) {
//     let bossHP = 500;
//     let finalDamage;

//     if (criticalHit === true){
//         finalDamage = baseDamage * 3
//     } else finalDamage = baseDamage

//     let remainingHP = bossHP - finalDamage;

//     if (remainingHP < 0){
//         remainingHP = 0; 
//     }

//     return remainingHP
// } console.log(bossBattle(200, true));


function calculateBossRemainingHp(baseDamage, isCriticalHit) {
  if (isNaN(baseDamage) || baseDamage < 0) {
    return "Invalid Number. Please enter a valid base damage";
  }

  const initialHp = 500

  const finalDamage = initialHp - (isCriticalHit ? (baseDamage * 3) : baseDamage)

 return finalDamage < 0 ? 0 : finalDamage

}