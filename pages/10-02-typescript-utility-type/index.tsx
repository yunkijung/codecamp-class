export default function TypescriptUtilityPage(){
    interface IProfile {
        name: string
        age: number
        school: string
        hobby?: string
    }

    type IProfile2 = {
        name: string
        age: number
        school: string
        hobby?: string
    }

    // 1. Pick type
    type aaa = Pick<IProfile, "name" | "age">

    // 2. Omit type
    type bbb = Omit<IProfile, "school">

    // 3. Partial type
    type ccc = Partial<IProfile>

    // 4. Required type
    type ddd = Required<IProfile>

    // 5. Record type
    type eee = "John" | "Simon" | "Garry" // Union type
    let child: eee
    child = "Simon"

    type fff = Record<eee, IProfile> // Record type

    // ===== (type vs interface) differences: declare combined =====
    interface IProfile {
        candy: number
    }

    let profile: Partial<IProfile> = {}
    profile.candy = 10
    

    return (
        <></>
    )
}