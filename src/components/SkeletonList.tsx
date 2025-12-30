import Skeleton from "./Skeleton";

export default function SkeletonList() {
    const list = []
    for (let index = 0; index < 10; index++) {
        list.push(<Skeleton />)
    }
    return (
        <div className='flex items-center justify-center flex-wrap gap-4'>
            {list}
        </div>
    );

}