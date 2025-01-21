export default function FAQ() {
  return (
    <div className="container text-text mx-auto p-4">
      <p className="w-full text-center text-2xl text-text font-bold mt-12 mb-[34px]">
        FAQ
      </p>

      <div className="collapse collapse-arrow rounded-lg  mb-4 border border-[#FFE0AB]">
        <input type="radio" name="accordion" className="peer" defaultChecked />
        <div className="collapse-title text-xl font-medium  bg-white peer-checked:bg-[#FFF8EC]">
          Can I try your services before making a deposit? Do you have a Free
          Trial?
        </div>
        <div className="collapse-content bg-white peer-checked:bg-[#FFF8EC]">
          <p>
            Fashion houses collaborate with digital artists to create exclusive
            virtual fashion pieces sold as Non-Fungible Tokens (NFTs), merging
            technology and couture in a revolutionary way.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow rounded-lg mb-4 border border-[#FFE0AB]">
        <input type="radio" name="accordion" className="peer" />
        <div className="collapse-title text-xl font-medium bg-white peer-checked:bg-[#FFF8EC]">
          Click to open this one and close others
        </div>
        <div className="collapse-content bg-white peer-checked:bg-[#FFF8EC]">
          <p>This is the content for the second FAQ.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow rounded-lg mb-4 border border-[#FFE0AB]">
        <input type="radio" name="accordion" className="peer" />
        <div className="collapse-title text-xl font-medium bg-white peer-checked:bg-[#FFF8EC]">
          Click to open this one and close others
        </div>
        <div className="collapse-content bg-white peer-checked:bg-[#FFF8EC]">
          <p>This is the content for the third FAQ.</p>
        </div>
      </div>
    </div>
  );
}
