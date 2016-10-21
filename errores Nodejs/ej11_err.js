function c() {
	b();
}

function b() {
	a();
}

function a() {
	try {
	setTimeout(function() {
		throw new Error('se ha producido error');
    },10);
    } catch (e) { }
}

c();
