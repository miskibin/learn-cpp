cmake_minimum_required(VERSION 3.28)
project(PhysicsSimulation)

set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Check if we are cross-compiling
if(CMAKE_SYSTEM_NAME STREQUAL "Windows")
    # Set the path to the SFML and spdlog libraries for Windows
    set(SFML_DIR "/path/to/windows/sfml")
    set(spdlog_DIR "/path/to/windows/spdlog")
endif()

# Find SFML
find_package(SFML 2.6 COMPONENTS graphics window system REQUIRED)
add_executable(PhysicsSimulation main.cpp src/PhysicsShape.hpp src/circleWithPhisics.hpp src/constants.hpp src/environment.hpp)
target_link_libraries(PhysicsSimulation sfml-graphics sfml-window sfml-system spdlog fmt)

# Include directories
target_include_directories(PhysicsSimulation PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/src)

find_package(GTest REQUIRED)
include_directories(${GTEST_INCLUDE_DIRS})

add_executable(PhysicsShapeTest tests/PhysicsShapeTest.cpp)
target_link_libraries(PhysicsShapeTest ${GTEST_BOTH_LIBRARIES} sfml-graphics sfml-window sfml-system  spdlog fmt)

enable_testing()
include(CTest)  #
# Discover tests
include(GoogleTest)
gtest_discover_tests(PhysicsShapeTest)