export default function Tabs({children, butt, ButtContainer}){
//if we dont use uppercase for buttcontainer than assign it with some const
    return (
        <> 
        <ButtContainer>
        {butt}
        </ButtContainer>
        {children}
        </>
    );
}