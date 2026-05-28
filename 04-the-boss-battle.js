function bossBattle( baseDamage, criticalHit){
    let bossHP = 500;
    let finalDamage;

    if (criticalHit === true){
        finalDamage = baseDamage * 3
    } else finalDamage = baseDamage

    let remainingHP = bossHP - finalDamage;

    if (remainingHP < 0){
        remainingHP = 0; 
    }

    return remainingHP
} console.log(bossBattle(200, true))