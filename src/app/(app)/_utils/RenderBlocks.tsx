import { blocks } from "../_blocks/blockList";

const RenderBlocks = ({ layout }: any) => {
  <div>
    {layout.map((block: any, i: any) => {
      const Block = blocks[block.blockType];
      if (Block) {
        return <Block key={i} {...block} />;
      }

      return null;
    })}
  </div>;
};

export default RenderBlocks;
