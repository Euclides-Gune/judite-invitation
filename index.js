
function choice() {
    const title = event.currentTarget.parentNode.parentNode.parentNode.children[0].innerHTML;
    console.log(title);
    const a = event.currentTarget.parentNode.parentNode.children[0];
    const message = `*Presente: *${title}%0A*remetente: *`;
    a.href = `https://wa.me/258847189894?text=${message}`;
}