contract Contract2 {
    function info() returns (uint) {}
}


contract Contract1 {
    Contract2 c2;
    
    function Contract1(address addr){
        
        c2 = Contract2(addr);
        
        test();
        
    }
    
    function test() returns (uint) {
        
        c2.info();
    }
    
    
}
