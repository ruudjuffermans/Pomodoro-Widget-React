
import styled from "styled-components";
import PageHeading from "../../../components/PageHeading";
import PageSection from "../../../components/PageSection";


const SkillsList = styled.div`
    gap: 6px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    `;

const Skill = styled.span`
padding: 5px;
    border-radius: 2px;
    border: 1px solid #333333;
    background-color: #232323;
    box-shadow: 0 2px 3px #0000003d;



    `;

const SkillSet = () => {
  return (
    <PageSection>
      <PageHeading>Skillset</PageHeading>
      <SkillsList>
    <Skill>SQL</Skill>
    <Skill>Python</Skill>
    <Skill>Data Warehousing</Skill>
    <Skill>Apache Hadoop</Skill>
    <Skill>Apache Spark</Skill>
    <Skill>Data Modeling</Skill>
    <Skill>ETL (Extract, Transform, Load)</Skill>
    <Skill>Data Pipeline Design</Skill>
    <Skill>Cloud Computing Services (AWS, Azure, GCP)</Skill>
    <Skill>NoSQL Databases (MongoDB, Cassandra)</Skill>
    <Skill>Stream Processing (Apache Kafka, Apache Flink)</Skill>
    <Skill>Machine Learning Basics</Skill>
    <Skill>Big Data Technologies</Skill>
    <Skill>Data Governance and Compliance</Skill>
    <Skill>Performance Tuning and Optimization</Skill>
</SkillsList>
    </PageSection>
  )
}

export default SkillSet