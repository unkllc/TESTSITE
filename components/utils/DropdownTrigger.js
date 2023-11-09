import Image from 'next/image';

function DropdownTrigger() {
  return (
    <button>
      <Image src="/icons/filter.svg" width={10} height={10} />
    </button>
  );
}
export default DropdownTrigger;
